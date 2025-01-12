// Αρχείο index.mjs
import express from 'express';
import { engine } from 'express-handlebars';
const app = express()
// Δηλώνουμε πως θα χρησιμοποιήσουμε το handlebars
// και αλλάζουμε την προκαθορισμένη επέκταση σε .hbs.
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
