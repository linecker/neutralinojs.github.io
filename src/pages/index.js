import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import {Adsense} from '@ctrl/react-adsense';

const youtubePlaylist = "https://www.youtube.com/watch?v=txDlNNsgSh8&list=PLvTbqpiPhQRb2xNQlwMs0uVV0IN8N-pKj&ab_channel=CodeZri";
const features = [
  {
    title: 'Native API',
    imageUrl: 'img/undraw_in_progress_ql66.svg',
    description: (
      <>
        Neutralinojs Javascript API exposes access to the operating system level functions such as file manipulation,
        executing commands, showing native dialog boxes, etc.
      </>
    ),
  },
  {
    title: 'Portable & Zero Dependency',
    imageUrl: 'img/undraw_takeout_boxes_ap54.svg',
    description: (
      <>
        No extra dependencies are required to run Neutralinojs apps. The great advantage is that you can make
        applications for all platforms on one platform. No compilers are required!
      </>
    ),
  },
  {
    title: 'Cross-Platform Support',
    imageUrl: 'img/undraw_social_friends_nsbv.svg',
    description: (
      <>
        Neutralinojs apps will work on Linux, Windows, macOS, and Web. Single portable application package
        can be released for all popular operating systems and web browsers.
      </>
    ),
  },
  {
    title: 'Lightweight & Fast',
    imageUrl: 'img/undraw_upgrade_06a0.svg',
    description: (
      <>
        An uncompressed Neutralinojs app is only ~5MB, and a compressed app size is ~1MB. Indeed,
        it will not consume either physical memory or storage like any other chromium-based cross-platform application development framework.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const [isInitialized, setIsInitialized] = useState(false);
  const [isEthABlocked, setIsEthABlocked] = useState(false)
  useEffect(() => {
    if (isInitialized) {
      return;
    }
    setIsInitialized(true);
    try {
      setIsEthABlocked(typeof ethicalads === 'undefined')
      ethicalads.load_placements()
    } catch (error) {
      setIsEthABlocked(false)
    }
  });
  return (
    <Layout
      title={`${siteConfig.tagline}`}
      description="Neutralinojs is a framework for building lightweight cross-platform desktop apps with JavaScript, HTML, and CSS.">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div>
              <div
                data-ea-publisher="neutralino"
                data-ea-type="image">
              </div>
          </div>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <div className={styles.intro}>
        <div className="container">
          <div className="row">
            <div className="col col--6">
              <h1>Build once with JavaScript</h1>
              <p>Run on Linux, Windows, macOS, and Web.</p>
            </div>
            <div className="col col--6">
              <p>
                Neutralinojs is a lightweight cross-platform application development framework.
                It lets you develop lightweight, blazing-fast, and portable applications using JavaScript,
                HTML, and CSS.
                <br/><br/>
                In Electron and NWjs, Embedded Chromium and Node make simple apps bloaty. Neutralinojs
                offers a lightweight and portable SDK which is an alternative for Electron and NW.js also with many advantages.
                <br/><br/>
                If you can build a website, you can build cross-platform desktop apps too - because Neutralinojs is a framework for
                creating native desktop applications with web technologies like JavaScript, HTML, and CSS. You can indeed use your
                favorite frontend framework (Angular, React, Svelte, and Vue) for building your next Neutralinojs app.
              </p>
            </div>
            <div className="col col--12">
              <Adsense
                client='ca-pub-4805219819571962'
                slot='1174653824'
                style={{ display: 'block' }}
                layout='in-article'
                format='auto'
              />
            </div>
          </div>
        </div>
      </div>
      <div className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Learn Neutralinojs in 5 mins</h1>
          <p className="hero__subtitle">Start building amazing apps</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Docs
            </Link>
            <Link
              style={{marginLeft: '12px'}}
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={youtubePlaylist}>
              Tutorial
            </Link>
          </div>
        </div>
      </div>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <div className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Start developing lightweight apps today!</h1>
          <p className="hero__subtitle">
            <code>
              npm install -g @neutralinojs/neu
            </code>
          </p>
        </div>
      </div>
    </Layout>
  );
}
