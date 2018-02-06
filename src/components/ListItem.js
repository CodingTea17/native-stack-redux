import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { CardSection } from './common';
import { connect } from 'react-redux';
import * as actions from '../actions/';

class ListItem extends Component {
  render() {
    const { id, title, description } = this.props.library;

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={styles.titleSize}>
              {title}
            </Text>
          </CardSection>
          { this.props.expanded && <Text>{description}</Text> }
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleSize: {
    fontSize: 18,
    paddingLeft: 15,
  }
}

const mapStateToProps = (state, ownProps) => {
  return { expanded: state.selectedLibraryId === ownProps.library.id }
};

export default connect(mapStateToProps, actions)(ListItem);
