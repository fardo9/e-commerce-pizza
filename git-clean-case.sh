#!/bin/bash

# chmod +x git-clean-case.sh
find . -type f -print0 | while IFS= read -r -d '' file; do
  lower=$(echo "$file" | tr '[:upper:]' '[:lower:]')
  if [[ "$file" != "$lower" && -f "$lower" ]]; then
    echo "🧹 Remove: $file"
    git rm --cached "$file"
    rm "$file"
  fi
done