import {Alert, AlertLink} from './modules/alert';
import {Badge} from './modules/badge';
import {BreadCrumbs, BreadCrumb} from './modules/breadcrumbs';
import {ButtonDropdown, SplitButtonDropdown} from './modules/buttonDropdown';
import {Divider} from './modules/divider';
import {Jumbotron} from './modules/jumbotron';
import {Media, MediaBody, MediaHeading1, MediaHeading2, MediaHeading3,
    MediaHeading4,MediaHeading5, MediaHeading6, MediaObject} from './modules/media';
import {ProgressBar} from './modules/progressBar';
import {Well} from './modules/well';

document.registerElement('x-alert', Alert);
document.registerElement('x-alert-link', AlertLink);
document.registerElement('x-badge', Badge);
document.registerElement('x-breadcrumbs', BreadCrumbs);
document.registerElement('x-breadcrumb', BreadCrumb);
document.registerElement('x-button-dropdown', ButtonDropdown);
document.registerElement('x-divider', Divider);
document.registerElement('x-jumbotron', Jumbotron);
document.registerElement('x-media', Media);
document.registerElement('x-media-body', MediaBody);
document.registerElement('x-media-header1', MediaHeading1);
document.registerElement('x-media-header2', MediaHeading2);
document.registerElement('x-media-header3', MediaHeading3);
document.registerElement('x-media-header4', MediaHeading4);
document.registerElement('x-media-header5', MediaHeading5);
document.registerElement('x-media-header6', MediaHeading6);
document.registerElement('x-media-object', MediaObject);
document.registerElement('x-progress-bar', ProgressBar);
document.registerElement('x-split-button-dropdown', SplitButtonDropdown);
document.registerElement('x-well', Well);