import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Marcin Bartmiński</title>
        <meta name="description" content="My personal portfolio website." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className={styles.websiteContainer}>
        <div className={styles.contentContainer}>
          <div className={styles.nav}>
            <div className={styles.navContainer}>
              <div className={styles.avatarLinkDiv}>
                <a href='./' className={styles.avatarLink}>
                  <div className={styles.avatarDiv}>
                    <img src='images/memoji.png' className={styles.avatarImage} />
                  </div>
                </a>
              </div>
              <div className={styles.titleDiv}>
                <h1>Marcin Bartmiński</h1>
                <p className='caption'>iOS Developer</p>
              </div>
              <nav>
                <div>
                  <p>
                    <a className='navLink selected' href='./'>About me</a>
                  </p>
                </div>

              </nav>
            </div>
          </div>
          <div className={styles.line}></div>
          <div>
            <p>
              Hello! I&apos;m Marcin, an iOS Developer and <a className='inlineLink' href='https://zsk.poznan.pl' target="_blank" rel="noreferrer">ZSK</a> student.
              In my free time I play video games, code, and watch movies.
              You can follow me on <a className='inlineLink' href='https://twitter.com/bartmisnki' target="_blank" rel="noreferrer">Twitter</a>, 
              check out my projects on <a className='inlineLink' href='https://github.com/mbdjj' target="_blank" rel="noreferrer">GitHub</a>, 
              or send me an <a className='inlineLink' href='mailto:marcin@bartminski.ga'>Email</a>.
            </p>
          </div>
          <div className={styles.photoDiv}>
            <img className={styles.photoImage} src='/images/marcin.jpeg' />
          </div>
        </div>
      </div>
    </>
  )
}
