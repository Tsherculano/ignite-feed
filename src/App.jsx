import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';


export function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Thiago Herculano"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga natus minima vitae excepturi, officia, animi nulla soluta unde odit rerum est. Hic, inventore illo cupiditate officiis repellat laboriosam ducimus aspernatur."
          />
          <Post
            author="Samara Herculano"
            content="A mulher mais linda do mundo"
          />
        </main>
      </div>
    </>
  )
}



