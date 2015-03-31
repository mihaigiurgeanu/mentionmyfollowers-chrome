# mentionmyfollowers

A chrome extension that helps you generate comments that automatically
mention isnstagram followers.

## Build

To build the program you need java 7 or later, leiningen, node and grunt-cli
installed.

One time, install npm dependencies:

    $ npm install

Build javascripts and run grunt to package the extension:

    $ lein do clean, resource, cljsbuild once browseraction_dev content_dev
    $ grunt

The result will be in folder dist/

## License

Copyright © 2015 FIXME

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
