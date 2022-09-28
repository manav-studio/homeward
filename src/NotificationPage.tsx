//
//  Presentational Components
//

import { Text, View } from 'react-native';

export const NotificationPage = ({ text, title, onPress }: { text: string; title: string; onPress?: () => void }) => {
  return (
    <View style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ borderRadius: 20, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontFamily: 'Poppins-SemiBold', color: '#444444', fontSize: 20 }}>{title}</Text>
        <Text
          onPress={onPress}
          style={{ fontFamily: 'Poppins-SemiBold', color: onPress ? 'blue' : '#444444', fontSize: 15 }}>
          {text}
        </Text>
      </View>
    </View>
  );
};
