#!/bin/bash

if ! command -v ng &> /dev/null
then
    echo "ng could not be found"
    exit 1
fi


if [ "$1" == "" ] || [ $# -gt 1 ]; then
        echo "Enter either 'production' or 'demo' as an argument."
	exit 0
fi

if [[ "$1" =~ ^(demo|production)$ ]]; then
        PACKAGE="brainsharer.$1.frontend.tar.gz"
        echo "Creating $1 deployment with tarball=$PACKAGE"
        rm -rvf dist/brainsharer_frontend/*
        ng build --configuration=$1
        rm -vf $PACKAGE
        cd dist/brainsharer_frontend
        tar zcvf ../../$PACKAGE *
        cd ../../
else
        echo "Wrong argument: $1"
        echo "Use:"
        echo "./deploy.sh demo"
        echo "or"
        echo "./deploy.sh production"
fi
