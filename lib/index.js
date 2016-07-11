/**
 * maelstrom-browser | lib/index.js
 */
'use strict';

const BrowserSync = require('browser-sync');
const Maelstrom   = require('../../maelstrom/lib/index.js');

// // // // // // // // // // // // // // // // // // // // // // // // // // //

const $plugin = new Maelstrom.Plugin(__filename, 'browser');

// -----------------------------------------------------------------------------

/**
 *
 */
$plugin.setWatch(function()
{
    let $config = Maelstrom.config.browser;
    BrowserSync.init($config.browserSync);

    Maelstrom.gulp.watch($config.watch).on('change', function()
    {
        setTimeout(BrowserSync.reload, $config.reloadTimeout);
    });
});

// -----------------------------------------------------------------------------

module.exports = $plugin;
