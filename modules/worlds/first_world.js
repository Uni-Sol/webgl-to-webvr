pwrl({
  'PWRLScript V1.0 utf8': [
    /**
     *  A demonstration of the PWRLScript API
     *  (Procedural World Realization Language)
     *  A brown hut described with PWRL syntax
     *
     *  Adapted from
     *  The VRML 2.0 Sourcebook
     *  By Andrea L. Ames, David R. Nadeau, and John L. Moreland
     *  (John Wiley & Sons, Inc., 1997)
     */
    NavigationInfo({
      type: [ "EXAMINE", "ANY" ]
    }),
    Viewpoint({
      description: "First view",
      orientation: [ 0, 1, 0, 0.0 ],
      position: [ 0, 1.6, -10 ]
    }),
    Group({
      children: [
        Transform({
          children: [
            // Draw the hut walls
            Shape({
              appearance: DEF({
                'Brown': Appearance({
                  material: Material({
                    diffuseColor: [ 0.6, 0.4, 0.0 ]
                  })
                })
              }),
              geometry: Cylinder({
                height: 2.0,
                radius: 2.0
              })
            }),
            // Draw the hut roof
            Transform({
              children: [
                Shape({
                  appearance: USE('Brown'),
                  geometry: Cone({
                    height: 2.0,
                    bottomRadius: 2.5
                  })
                })
              ],
              translation: [ 0.0, 2.0, 0.0 ]
            })
          ],
          // Shrink the entire model
          scale: [ 0.25, 0.25, 0.25 ]
        })
      ]
    })
  ]
})
