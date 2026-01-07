import { Platform, StyleSheet, View } from 'react-native';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

const adUnitId = __DEV__ 
  ? TestIds.BANNER 
  : Platform.select({
      ios: 'ca-app-pub-6631574287187786/3782039660',
      android: 'ca-app-pub-6631574287187786/3782039660',
      default: 'ca-app-pub-6631574287187786/3782039660',
    }) || 'ca-app-pub-6631574287187786/3782039660';

export default function AdMobBanner() {
  return (
    <View style={styles.banner}>
      <BannerAd
        unitId={adUnitId}
        size={BannerAdSize.FULL_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    alignSelf: 'center',
    marginVertical: 10,
  },
});
