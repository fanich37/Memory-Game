#!/bin/sh

OS=`uname`
FOLDER=src/components
EXTENSION=jsx

if [ $1 ]; then
	if [ $OS = 'Darwin' ]; then
		PREFIX=''
	elif [ $OS = 'MINGW64_NT-10.0' ]; then
		PREFIX=-e
	fi

	if [ ! "$2" ]; then
		COMPONENT="import React from 'react';\nimport './$1.css';\n\nclass $1 extends React.Component {\n\trender() {\n\t\treturn (\n\t\t\t<p>Don't forget to render smth...</p>\n\t\t);\n\t}\n}\n\nexport default $1;"
	elif [ -n "$2" ] && [ "$2" = "-s" ]; then
		COMPONENT="import React from 'react';\nimport './$1.css';\n\nconst $1 = () => <p>Don't forget to render smth...</p>\n\nexport default $1;"
	fi

	mkdir -p $FOLDER/$1 && cd $FOLDER/$1 && touch $1.$EXTENSION && echo $PREFIX $COMPONENT > $1.$EXTENSION && touch $1.css
else
	echo '--- The name of the component is required. ---'
fi