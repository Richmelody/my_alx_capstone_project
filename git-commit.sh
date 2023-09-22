#!/bin/bash

# Check if there are any changes to commit
if [[ -n $(git status -s) ]]; then
	  # Prompt for a commit message
	    read -p "Enter a commit message: " commit_message

	      # Add all changes, commit with the entered message, and push to the current branch
	        git add .
		  git commit -m "$commit_message"
		    git push origin $(git symbolic-ref --short HEAD)
		      
		      echo "Changes committed and pushed to the current branch."
	      else
		        echo "No changes to commit."
fi

