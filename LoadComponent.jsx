import React, { Fragment, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import loadable from "@loadable/component";

//******************************************************** AUTO MODULE IMPORTER ********************************************************************/
const LoadComponent = loadable((props) => import(`${props.page}`).catch(err => alert(err)), {
    fallback: <div>Page is Loading...</div>,
    cacheKey: (props) => props.page,
});
//************************************************************************************************************************************************/

export default  LoadComponent;