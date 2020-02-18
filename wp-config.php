<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'NDCJ22G7GT' );

/** MySQL database username */
define( 'DB_USER', 'NDCJ22G7GT' );

/** MySQL database password */
define( 'DB_PASSWORD', 'nB3fOKq7hW' );

/** MySQL hostname */
define( 'DB_HOST', 'remotemysql.com' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'xxa}iVl-N_zf|bT%9VpI:0WDsTbO>R-Ug6O:ojH(ob{e7>mh^fv[1XYRB-yq7Fbv' );
define( 'SECURE_AUTH_KEY',  '_gILB&BzIRI^9Zy#{Ax3M-[$Kj>l!cxn.9b7Z%C)DEr GR9k!SuKNQeS?FHo?!il' );
define( 'LOGGED_IN_KEY',    'Q}{mhv86=W@RGgo43E>[ZO}P5UmZcCMGcn9G;b1T?x[e-X:z<1YZVI^JBFyaaS #' );
define( 'NONCE_KEY',        '$yzb,]Ga7S+YS),(uZw9XWsi;~_6PKK3il%,nzbXl;j2`I=U)`]-Gq:x[w67JAg8' );
define( 'AUTH_SALT',        ']Vm[.w)WU#|R5J*jaMBe>r%vU3`NuF^62Pv3M4hyIN:a9 AGUP5T/(M}:9P[p=As' );
define( 'SECURE_AUTH_SALT', '@oZ|`$Z03RrMzgF|f51$aNQhd:HR1;Wew=h>1vPcN_KTq|I@dt]WMav-J|rH3bG2' );
define( 'LOGGED_IN_SALT',   '[3I+;y9e=&v2g`F{i4Ve9ufZ&gOQZJw_+jL( ^8wd{MVI4||5dH9%w!0S&S^J*Dy' );
define( 'NONCE_SALT',       'ORIKl.],L,9ro7x)w,7Dxp=>Q-l9ixXlkxOU<p1iy[Ymp:A@L4OZ]N:O9&^noDi(' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
