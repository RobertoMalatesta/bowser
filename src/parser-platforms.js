import {
  getFirstMatch
} from './utils';

const TYPES = {
  tablet: 'tablet',
  mobile: 'mobile',
  desktop: 'desktop'
};

export default [
  /* Nexus Tablet */
  {
    test: [/nexus\s*[0-9]+/i],
    describe() {
      return {
        type: TYPES.tablet,
        vendor: 'Nexus',
      };
    }
  },

  /* iPad */
  {
    test: [/ipad/i],
    describe() {
      return {
        type: TYPES.tablet,
        vendor: 'Apple',
        model: 'iPad'
      }
    }
  },

  /* Silk Tablet */
  {
    test: [/silk/i],
    describe() {
      return {
        type: TYPES.tablet
      }
    }
  },

  /* Tablet */
  {
    test: [/tablet/i],
    describe() {
      return {
        type: TYPES.tablet
      };
    }
  },

  /* iPod/iPhone */
  {
    test: [/ipod|iphone/i],
    describe(ua) {
      const model = getFirstMatch(/(ipod|iphone)/i, ua);
      return {
        type: TYPES.mobile,
        vendor: 'Apple',
        model: model
      };
    }
  },

  /* Nexus Mobile */
  {
    test: [/nexus\s*[0-6]\s*/i],
    describe() {
      return {
        type: TYPES.mobile,
        vendor: 'Nexus'
      };
    }
  },

  /* Mobile */
  {
    test: [/[^-]mobi/i],
    describe() {
      return {
        type: TYPES.mobile
      };
    }
  },

  /* BlackBerry */
  {
    test(parser) {
      return parser.getBrowserName(true) === 'blackberry';
    },
    describe() {
      return {
        type: TYPES.mobile,
        vendor: 'BlackBerry'
      };
    }
  },

  /* Bada */
  {
    test(parser) {
      return parser.getBrowserName(true) === 'bada';
    },
    describe() {
      return {
        type: TYPES.mobile
      }
    }
  },

  /* Windows Phone */
  {
    test(parser) {
      return parser.getBrowserName() === 'windows phone';
    },
    describe() {
      return {
        type: TYPES.mobile,
        vendor: 'Microsoft'
      }
    }
  },

  /* Android Tablet */
  {
    test(parser) {
      const osMajorVersion = Number(String(parser.getOSVersion()).split('.')[0]);
      return parser.getOSName(true) === 'android' && (osMajorVersion >= 3);
    },
    describe() {
      return {
        type: TYPES.tablet
      }
    }
  },

  /* Android Mobile */
  {
    test(parser) {
      return parser.getOSName(true) === 'android';
    },
    describe() {
      return {
        type: TYPES.mobile
      }
    }
  },

  /* desktop */
  {
    test(parser) {
      return parser.getOSName(true) === 'macos';
    },
    describe() {
      return {
        type: TYPES.desktop,
        vendor: 'Apple'
      };
    }
  },

  /* Windows */
  {
    test(parser) {
      return parser.getOSName(true) === 'windows';
    },
    describe() {
      return {
        type: TYPES.desktop
      }
    }
  },

  /* Linux */
  {
    test(parser) {
      return parser.getOSName(true) === 'linux';
    },
    describe() {
      return {
        type: TYPES.desktop
      }
    }
  }
];