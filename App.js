import React from 'react';
import { StyleSheet, Text, ART, View } from 'react-native';

const {
  Surface,
  Shape,
  Group,
  Path,
  ClippingRectangle,
  LinearGradient,
  RadialGradient,
  Pattern,
  Transform
} = ART;

class PlusIcon extends React.Component {
    render() {
        const path = [
		 [ 'M', 8, 12 ], [ 'L', 8, 20 ], [ 'L', 12, 20 ], [ 'L', 12, 12 ], [ 'L', 20, 12 ], [ 'L', 20, 8 ],
		 [ 'L', 12, 8 ], [ 'L', 12, 0 ], [ 'L', 8, 0 ], [ 'L', 8, 8 ], [ 'L', 0, 8 ], [ 'L', 0, 12 ], [ 'L', 8, 12 ]
		];

		const {width = 10, height = 10} = this.props;
		const viewBox = 20;
		const rx = width/viewBox, ry = height/viewBox;

		const d = path.map(([t, x, y]) => t + (x*rx) + ',' + (y*ry)).join(' ');
        return (
            <Surface width={width} height={height}>
				<Shape
                    fill="#00AFF8" 
					d={d + ' Z'}
				></Shape>
            </Surface>
        );
    }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
		<PlusIcon
			width={50} height={50} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
