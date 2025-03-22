import express, {Application, Express} from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server'
import Home from './client/components/Home'

const port = 8000;

const app: Application = express();


app.get('/', (req, res) => {
    const content = renderToString(Home());

    res.send(content)
})

app.listen(port, ()=>{
    console.log('Server is listening...')
})