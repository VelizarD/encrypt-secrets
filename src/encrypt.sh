#!/bin/bash

BINARY_ENCRYPTED_SECRET=$(echo -n $1 | openssl enc -aes-256-cbc -pbkdf2 -salt -k $2)
echo ::set-output name=encrypted-secret::$BINARY_ENCRYPTED_SECRET
