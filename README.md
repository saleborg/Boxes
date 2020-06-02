## Setup
1. Run this SQL statement in mySQL:
	<code>
	CREATE TABLE `boxes` (
	  `idboxes` int(10) NOT NULL AUTO_INCREMENT,
	  `name` varchar(45) DEFAULT NULL,
	  `weight` double DEFAULT NULL,
	  `shippingcost` double DEFAULT NULL,
	  `color` varchar(45) DEFAULT NULL,
	  PRIMARY KEY (`idboxes`),
	  KEY `colorid` (`color`)
	) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=latin1;
	</code>

2. On line 78 in Backend/BoxRest/src/main/java/stefan/BoxDAO.java change the username and password for your database.


## Staring the system
1. From a command prompt run the file 'startsystem.bat'

## Accessing the system
1. Open chrome or firefox and Allow CORS: Access-Control-Allow-origin. This could be done with the plugin from here: https://addons.mozilla.org/sv-SE/firefox/addon/access-control-allow-origin/ , OR set your tomcat installation to allow CORS. This is dependent on version but here is an example of the filter:

2. Go to http://localhost:8080/

## Running the tests
1. From a command prompt run the file 'runtests.bat'

There is --watchAll on the jest so that I can have that running when making changes in the code and directly excute tests.
