#!/bin/sh
for i in $(env | grep MY_APP_) # Look for env vars with prefix MY_APP_
do
    key=$(echo $i | cut -d '=' -f 1)    # Extract the key (e.g., MY_APP_API_URL)
    value=$(echo $i | cut -d '=' -f 2-) # Extract the value (e.g., https://api.example.com)
    echo "$key=$value"                  # Log for debugging
    # Replace placeholders in JS and CSS files
    find /usr/share/nginx/html -type f \( -name '*.js' -o -name '*.css' \) -exec sed -i "s|${key}|${value}|g" '{}' +
done