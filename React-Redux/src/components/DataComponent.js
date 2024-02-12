// components/DataComponent.js
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../actions/dataActions';

const DataComponent = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.data.data);
    const error = useSelector((state) => state.data.error);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    return (
        <View>
            {error && <Text>Error: {error}</Text>}
            {data.length > 0 ? (
                <View>
                    {data.map((item) => (
                <Text key={item.id}>{item.name}</Text>
            ))}
        </View>
    ) : (
        <Text>Loading data...</Text>
    )}
    </View>
    );
};

export default DataComponent;