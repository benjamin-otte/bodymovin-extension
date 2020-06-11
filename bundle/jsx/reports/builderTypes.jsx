/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global $, Folder, File, app */

$.__bodymovin.bm_reportBuilderTypes = (function () {

    return {
        EXPRESSIONS: 'expressions',
        WIGGLE: 'wiggle',
        UNHANDLED_LAYER: 'unhandled layer',
        DISABLED_LAYER: 'disabled layer',
        MOTION_BLUR: 'motion blur',
        PRESERVE_TRANSPARENCY: 'preserve transparency',
        THREE_D_LAYER: 'three d layer',
        EFFECTS: 'effects',
        UNHANDLED_SHAPE_PROPERTY: 'unhandled shape',
        MERGE_PATHS: 'merge paths',
        TEXT_ANIMATORS: 'text animators',
        ANIMATOR_PROPERTIES: 'animator properties',
    };
}());