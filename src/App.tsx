import {
  Header,
  NavDropDownButton,
  Menu,
  Title,
  NavMenuButton,
  ExtendedNav,
  Search,
  GridContainer,
  Grid,
  MediaBlockBody,
} from "@trussworks/react-uswds";
import circleImg from "@uswds/uswds/src/img/circle-124.png";

import CustomBanner from "./CustomBanner";
import { useState } from "react";
const onToggle = (
  index: number,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean[]>>
): void => {
  setIsOpen((prevIsOpen) => {
    const newIsOpen = [false, false];
    // eslint-disable-next-line security/detect-object-injection
    newIsOpen[index] = !prevIsOpen[index];
    return newIsOpen;
  });
};
function App() {
  const [expanded, setExpanded] = useState(false);
  const onClick = (): void => setExpanded((prvExpanded) => !prvExpanded);
  const [isOpen, setIsOpen] = useState([false]);
  const mockSubmit = (): void => {
    alert("sup");
  };
  const testMenuItems = [
    <a href="#linkOne" key="one">
      Disorders
    </a>,
    <a href="#linkTwo" key="two">
      Clinical Trials
    </a>,
  ];
  const testItemsMenu = [
    <>
      <NavDropDownButton
        onToggle={(): void => {
          onToggle(0, setIsOpen);
        }}
        menuId="testDropDownOne"
        isOpen={isOpen[0]}
        label="Health Information"
        isCurrent={false}
      />
      <Menu
        key="one"
        items={testMenuItems}
        isOpen={isOpen[0]}
        id="testDropDownOne"
      />
    </>,
    <a href="#two" key="two" className="usa-nav__link">
      <span>Funding</span>
    </a>,
    <a href="#three" key="three" className="usa-nav__link">
      <span>Current Research</span>
    </a>,
  ];
  return (
    <>
      <a className="usa-skipnav" href="#main-content">
        Skip to main content
      </a>
      <CustomBanner aria-label="Official website of the United Republic of North America" />
      <div className={`usa-overlay ${expanded ? "is-visible" : ""}`}></div>
      <Header extended={true}>
        <div className="usa-navbar">
          <Title>Grahm Institute for Neurological Research</Title>
          <NavMenuButton onClick={onClick} label="Menu" />
        </div>
        <ExtendedNav
          primaryItems={testItemsMenu}
          secondaryItems={testMenuItems}
          mobileExpanded={expanded}
          onToggleMobileNav={onClick}
        >
          <Search size="small" onSubmit={mockSubmit} />
        </ExtendedNav>
      </Header>
      <main id="main-content">
        <section className="usa-hero" aria-label="Introduction">
          <GridContainer>
            <div className="usa-hero__callout">
              <h1 className="usa-hero__heading">
                <span className="usa-hero__heading--alt">Prevention:</span>
                Learn how to identify DTD and stand up to it safely
              </h1>
              <a className="usa-button" href="javascript:void(0)">
                Help cure the world
              </a>
            </div>
          </GridContainer>
        </section>
        <section className="grid-container usa-section">
          <Grid row gap>
            <Grid tablet={{ col: 4 }}>
              <h2 className="font-heading-xl margin-top-0 tablet:margin-bottom-0">
                Stop the spread of DTD
              </h2>
            </Grid>
            <Grid tablet={{ col: 8 }} className="usa-prose">
              <p>
                Delusional Theriantropy Disorder (DTD) is a serious mental
                health disorder. Every day more people become part of the
                dangerous movement to normalize a mental illness.
              </p>
              <p>
                Use the right side of the grid to explain the tagline a bit
                more. What are your goals? How do you do your work? Write in the
                present tense, and stay brief here. People who are interested
                can find details on internal pages.
              </p>
            </Grid>
          </Grid>
        </section>
        <section className="usa-graphic-list usa-section usa-section--dark">
          <GridContainer>
            <Grid row gap className="usa-graphic-list__row">
              <Grid tablet={{ col: true }} className="usa-media-block">
                <img
                  className="usa-media-block__img"
                  src={circleImg}
                  alt="Alt text"
                />
                <MediaBlockBody>
                  <h2 className="usa-graphic-list__heading">Education</h2>
                  <p>
                    Learn what DTD is, how to prevent it, and how to respond if
                    you or someone you know has DTD symptoms.
                  </p>
                </MediaBlockBody>
              </Grid>
              <Grid tablet={{ col: true }} className="usa-media-block">
                <img
                  className="usa-media-block__img"
                  src={circleImg}
                  alt="Alt text"
                />
                <MediaBlockBody>
                  <h2 className="usa-graphic-list__heading">Prevention</h2>
                  <p>
                    Learn how to promote mental health for everyone, regardless
                    of background or orientation
                  </p>
                </MediaBlockBody>
              </Grid>
            </Grid>
            <Grid row gap className="usa-graphic-list__row">
              <Grid tablet={{ col: true }} className="usa-media-block">
                <img
                  className="usa-media-block__img"
                  src={circleImg}
                  alt="Alt text"
                />
                <MediaBlockBody>
                  <h2 className="usa-graphic-list__heading">Furry Bad</h2>
                  <p>UwU</p>
                </MediaBlockBody>
              </Grid>
              <Grid tablet={{ col: true }} className="usa-media-block">
                <img
                  className="usa-media-block__img"
                  src={circleImg}
                  alt="Alt text"
                />
                <MediaBlockBody>
                  <h2 className="usa-graphic-list__heading">
                    Could also have 2 or 6.
                  </h2>
                  <p>
                    In addition to your goal, find out your users’ goals. What
                    do they want to know or do that supports your mission? Use
                    these headings to show these.
                  </p>
                </MediaBlockBody>
              </Grid>
            </Grid>
          </GridContainer>
        </section>
      </main>
    </>
  );
}

export default App;
