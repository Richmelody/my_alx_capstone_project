#!/bin/bash

# Check if there are any changes to commit
if [[ $(git status --porcelain) ]]; then
	    # Prompt for a commit message
	      echo "Enter a commit message:"
		    read commit_message
	    else
		        # No changes to commit, so skip the commit message prompt
			    commit_message=""
fi

# Add all changes to the staging area
git add .

# Commit the changes with the specified commit message
git commit -m "$commit_message"

# Push the changes to the remote repository
git push
