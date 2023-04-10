// @flow
import * as React from "react";
import styled from "styled-components";
import { withTranslation, WithTranslation } from "react-i18next";

interface IErrorBoundaryProps {
  children: React.ReactNode | null;
  t?: any;
  defaultMessage?: string;
}

interface IErrorBoundaryState {
  hasError: boolean;
}

const StyledErrorBoundary = styled.div`
  padding: 10px;
`;

const StyledMessage = styled.p`
  letter-spacing: 1px;
  font-size: 18px;
  line-height: 200%;
  font-weight: bold;
`;

class ErrorBoundary extends React.Component<IErrorBoundaryProps, IErrorBoundaryState> {
  static defaultProps = {
    defaultMessage: "",
  };

  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;
    const { children, defaultMessage, t } = this.props;

    if (hasError) {
      return (
        <StyledErrorBoundary>
          {defaultMessage || <StyledMessage>{t("errors.loadingProblem")}</StyledMessage>}
        </StyledErrorBoundary>
      );
    }

    return children || null;
  }
}

export default withTranslation()(ErrorBoundary);
