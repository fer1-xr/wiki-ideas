import React, { useState, useEffect } from "react";

//css
import "./App.css";

// React router dom
import { Route, Routes, Navigate, useLocation } from "react-router-dom";

//Framer motion
import { AnimatePresence, motion } from "framer-motion";

//Components
import Home from "./Components/Views/Home/Home";
import Article from "./Components/Views/Article/Article";
import EditArticle from "./Components/Views/EditArticle/EditArticle";
import CreateArticle from "./Components/Views/CreateArticle/CreateArticle";
import Explore from "./Components/Views/Explore/Explore";
import Historial from "./Components/Views/Historial/Historial";
import Contact from "./Components/Views/Contact/Contact";
import About from "./Components/Views/About/About"
import Error404 from "./Components/Views/Error404/Error404";
import DrawerAppBar from "./Components/Header/DrawerAppBar";

const pageTransition = {
  in: {
    opacity: 1,
  },

  out: {
    opacity: 0,
  },
};

function App() {
  const location = useLocation();
  return (
    <>
      <DrawerAppBar />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/mainpage"
            element={
              <motion.div
                className="page"
                initial="out"
                animate="in"
                exit="out"
                variants={pageTransition}
              >
                <Home />
              </motion.div>
            }
          ></Route>
          <Route
            path="/explore"
            element={
              <motion.div
                className="page"
                initial="out"
                animate="in"
                exit="out"
                variants={pageTransition}
              >
                <Explore />
              </motion.div>
            }
          ></Route>
          <Route
            path="/Article"
            element={
              <motion.div
                className="page"
                initial="out"
                animate="in"
                exit="out"
                variants={pageTransition}
              >
                <Article />
              </motion.div>
            }
          ></Route>
          <Route
            path="/createarticle"
            element={
              <motion.div
                className="page"
                initial="out"
                animate="in"
                exit="out"
                variants={pageTransition}
              >
                <CreateArticle />
              </motion.div>
            }
          ></Route>
          <Route
            path="/editarticle"
            element={
              <motion.div
                className="page"
                initial="out"
                animate="in"
                exit="out"
                variants={pageTransition}
              >
                <EditArticle />
              </motion.div>
            }
          ></Route>
          <Route
            path="/historial"
            element={
              <motion.div
                className="page"
                initial="out"
                animate="in"
                exit="out"
                variants={pageTransition}
              >
                <Historial />
              </motion.div>
            }
          ></Route>
            <Route
            path="/about"
            element={
              <motion.div
                className="page"
                initial="out"
                animate="in"
                exit="out"
                variants={pageTransition}
              >
                <About/>
              </motion.div>
            }
          ></Route>
          <Route
            path="/contact"
            element={
              <motion.div
                className="page"
                initial="out"
                animate="in"
                exit="out"
                variants={pageTransition}
              >
                <Contact/>
              </motion.div>
            }
          ></Route>
          <Route
            path="*"
            element={
              <motion.div
                className="page"
                initial="out"
                animate="in"
                exit="out"
                variants={pageTransition}
              >
                <Error404 />
              </motion.div>
            }
          ></Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
