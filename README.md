# http2https
A very simple http -> https service. 

This can eg. be used to call from an Oracle database a https - enpoint.

It only needs a header-key named site, with the site to be reached, Let's say https://www.oracle.com
This way you do not need to store the public TLS certificate of every site you want to reach in the wallet on the database server.
