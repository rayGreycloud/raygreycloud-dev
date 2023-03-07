export const fadeCardsParent = {
  show: {
    transition: {
      staggerChildren: 0.25
    }
  }
};

export const fadeCard = {
  hidden: {
    opacity: 0
    // y: 200
  },
  show: {
    opacity: 1,
    // y: 0,
    transition: {
      ease: 'easeInOut',
      duration: 0.4
    }
  },
  exit: {
    opacity: 0,
    // y: -200,
    transition: {
      ease: 'easeInOut',
      duration: 0.8
    }
  }
};

export const navCardContainer = {
  show: {
    transition: {
      staggerChildren: 0.25
    }
  }
};

export const navCard = {
  hidden: {
    opacity: 0
    // y: 200
  },
  show: {
    opacity: 1,
    // y: 0,
    transition: {
      ease: 'easeInOut',
      duration: 0.4
    }
  },
  exit: {
    opacity: 0,
    // y: -200,
    transition: {
      ease: 'easeInOut',
      duration: 0.8
    }
  }
};

export const page = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6
    }
  }
};

export const pageHeader = {
  hidden: {
    scale: 0.8,
    opacity: 0
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.1,
      duration: 0.4
    }
  }
};

export const pageSubheader = {
  hidden: {
    scale: 0.8,
    opacity: 0
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.4
    }
  }
};
