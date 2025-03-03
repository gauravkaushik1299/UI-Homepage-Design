// src/fontAwesome.js
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faComment } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

// Add the imported icons to the library
library.add(faHeart, faComment);
library.add(faMagnifyingGlass);