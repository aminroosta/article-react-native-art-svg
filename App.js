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

const IconBuilder = (path, defaultSize) => (props) => {
	const segment = /([astvzqmhlc])([^astvzqmhlc]*)/ig;
	const number = /-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/ig;
	const {size = 10, fill = "#f0AFF8"} = props;

	const d = path.replace(segment, (_, cmd, args) => {
		let numbers = args.match(number) || [];
		return cmd + numbers.map(n => n * size/defaultSize).join(' ');
	});

	return (
		<Surface width={size} height={size}>
			<Shape fill={fill} d={d} />
		</Surface>
	);
};

const PlusIcon = IconBuilder("M4 6v4h2V6h4V4H6V0H4v4H0v2h4z", 10);

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
		<PlusIcon size={50} fill="red" />
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
