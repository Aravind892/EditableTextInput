import {Component} from 'react'

import {
  MainContainer,
  Container,
  Heading,
  Input,
  Button,
  InlineBlock,
  InlineText,
} from './styledComponents'

class EditableTextInput extends Component {
  state = {
    text: '',
    isEditable: true,
  }

  onChangeText = event => {
    this.setState({text: event.target.value})
  }

  onChangeStatus = () => {
    this.setState(prevState => ({isEditable: !prevState.isEditable}))
  }

  render() {
    const {text, isEditable} = this.state

    return (
      <MainContainer>
        <Container>
          <Heading>Editable Text Input</Heading>
          <InlineBlock>
            {isEditable ? (
              <Input type="text" onChange={this.onChangeText} />
            ) : (
              <InlineText>{text}</InlineText>
            )}
            {isEditable ? (
              <Button onClick={this.onChangeStatus}>Save</Button>
            ) : (
              <Button onClick={this.onChangeStatus}>Edit</Button>
            )}
          </InlineBlock>
        </Container>
      </MainContainer>
    )
  }
}

export default EditableTextInput
