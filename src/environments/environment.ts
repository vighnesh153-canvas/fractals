// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  fractals: {
    definitionAndMeaning: 'https://www.youtube.com/watch?v=gB9n2gHsHN4',
    channelOf3Blue1Brown: 'https://www.3blue1brown.com/',
    components: [
      {
        title: 'Pseudo Hilbert Curve',
        link: '/hilberts-curve',
        image: 'assets/images/hilbert-curve.png'
      },
      {
        title: 'Symmetric Binary Tree',
        link: '/symmetric-binary-tree',
        image: 'assets/images/symmetric-binary-tree.png'
      },
      {
        title: 'Barnsley\'s Fern',
        link: '/barnsleys-fern',
        image: 'assets/images/barnsleys-fern.png'
      },
      {
        title: 'Sierpinski\'s triangle',
        link: '/sierpinski-triangle',
        image: 'assets/images/sierpinski-triangle.svg'
      }
    ]
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
