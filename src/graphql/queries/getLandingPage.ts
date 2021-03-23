const GET_LANDING_PAGE = `
  fragment logo on LandingPage {
    logo {
      alternativeText
      url
    }
  }

  fragment header on LandingPage {
    header {
      title
      description
      button {
        label
        url
      }
      image {
        alternativeText
        url
      }
    }
  }
  fragment aboutProject on LandingPage {
    sectionAboutProject {
      title
      description
      image {
        alternativeText
        url
      }
    }
  }
  fragment sectionTech on LandingPage {
    sectionTech {
      title
      techIcons {
        title
        icon {
          url
        }
      }
    }
  }
  fragment sectionConcepts on LandingPage {
    sectionConcepts{
      title
      concepts {
        title
      }
    }
  }
  fragment sectionModules on LandingPage {
    sectionModules {
      title
      modules {
        title
        subtitle
        description
      }
    }
  }
  fragment sectionAgenda on LandingPage {
    sectionAgenda {
      title,
      description
    }
  }
  fragment pricingBox on LandingPage {
    pricingBox {
      totalPrice
      numberInstallments
      priceInstallment
      benefits
      button {
        label
        url
      }
    }
  }
  fragment sectionAboutUs on LandingPage {
    sectionAboutUs{
      title
      authors {
        name
        role
        description
        photo {
          url
        }
        socialLinks {
          title
          url
        }
      }
    }
  }
  fragment sectionReviews on LandingPage {
    sectionReviews {
      title
      reviews {
        id
        name
        text
        photo {
          alternativeText
          url
        }
      }
    }
  }
  fragment sectionFaq on LandingPage {
    sectionFaq {
      title
      questions {
        question
        answer
      }
    }
  }
  query GET_LANDING_PAGE {
    landingPage {
      ...logo
      ...header
      ...aboutProject
      ...sectionTech
      ...sectionConcepts
      ...sectionModules
      ...sectionAgenda
      ...pricingBox
      ...sectionAboutUs
      ...sectionReviews
      ...sectionFaq
    }
  }

`
export default GET_LANDING_PAGE
