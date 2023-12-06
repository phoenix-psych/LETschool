import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'
import OptionItem from './OptionItem'

export default function DetailSection({ course }) {
    return (
        <View style={{ padding: 10, borderRadius: 15, backgroundColor: 'blue' }}>
            <Image source={{ uri: course.banner?.url }}
                style={{ width: Dimensions.get('screen').width * .83, height: 190, borderRadius: 15 }}
            />
            <View style={{ padding:5}}>
            <Text style={{ fontSize: 24, color: 'black', marginTop: 10 }}>{course.name}</Text>

            <View style={{ display: 'flex', flexDirection: 'row', marginTop: 5, justifyContent: 'space-between' }}>
                <View>
                    <OptionItem icon={'book-outline'} value={course.chapter?.length + "chapters"} />
                    <OptionItem icon={'book-outline'} value={course.time?.length + "hour"} />
                </View>

                <View >
                    <OptionItem icon={'book-outline'} value={course.auther} />
                    <OptionItem icon={'book-outline'} value={course.price == 0 ? 'free' : course.price} />
                </View>
                </View>
                 <View>
                <Text  style={{fontSize:20}}>Decsription</Text>
                <Text  style={{fontSize:20}}>{course?.description?.markdown}</Text>
                </View>
            </View>
        </View>
    )
}