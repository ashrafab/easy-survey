import React from "react";
import Styled from "styled-components";

const Container = Styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormWrapper = Styled.div`
  width: 50%;
  height: 50%;
  max-height: 250px;
  border: 1px solid lightgrey;
  border-radius: 20px;
  box-shadow: 1px 3px 5px lightgrey;
`;

const InputWrapper = Styled.div`
  width: 100%;
  padding: 8px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  & :: last-of-type {
    margin-bottom: 10px;
  }
`;

const Input = Styled.input`
  width: 60%;
  text-align: center;
  height: 50px;
  border-radius: 5px;
  border: 1px solid #cecece;
  font-size: 18px;
`;

const ErrorText = Styled.span`
  font-size: 14px;
  color: #e74c3c;
`;

const Button = Styled.button`
  width: 60%;
  height: 50px;
  color: white;
  border-radius: 10px;
  background-color: #48d7b7;
  font-size: 22px;
  margin: 0 auto;
`;

class CreateSurvey extends React.Component {
  state = {
    submitted: false,
    errors: {}
  };

  createSurvey(data) {
    fetch(`/api/survey`, {
      method: "POST",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(resp => resp.json())
      .then(dt => {
        if (dt.errors) {
          this.setState({ errors: data.errors });
        } else if (dt.data && dt.data.survey) {
          this.props.history.push({
            pathname: `/survey/${dt.data.survey.id}`,
            state: { survey: dt.data.survey }
          });
        }
      })
      .catch(err => console.log("failed to create survey"));
  }

  submitHandler() {
    const { _name: { value: name }, _desc: { value: description } } = this;
    if (!String(name).trim()) {
      return this.setState({ errors: { name: "field is required!" } });
    }
    this.setState({ submitted: true, errors: {} });
    this.createSurvey({ name, description });
  }

  render() {
    return (
      <Container>
        <FormWrapper>
          <InputWrapper>
            <Input
              innerRef={ref => (this._name = ref)}
              placeholder="survey name"
            />
            {this.state.errors.name && (
              <ErrorText>{this.state.errors.name}</ErrorText>
            )}
          </InputWrapper>
          <InputWrapper>
            <Input
              innerRef={ref => (this._desc = ref)}
              placeholder="survey description"
            />
          </InputWrapper>
          <InputWrapper>
            <Button onClick={this.submitHandler.bind(this)}>Create</Button>
          </InputWrapper>
        </FormWrapper>
      </Container>
    );
  }
}

export default CreateSurvey;
