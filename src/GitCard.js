import React from 'react';
import styled from 'styled-components';

/* {
  login
  name
  avatar_url
  location
  bio
  followers_url
  followers
  following_url
  following
} */

export default class GitCard extends React.Component {
  render() {
    const { user, userFollowers } = this.props;

    return (
      <TopDiv>
        <UserDiv>
          <ImgDiv>
            <UserImg src={user.avatar_url} alt='user' />
          </ImgDiv>
          <TitleDiv>
            <LoginDiv>{user.login}</LoginDiv>
            <NameDiv>{user.name}</NameDiv>
            <br />
            <LinkDiv>
              <a href={user.html_url}>Github</a>
            </LinkDiv>
          </TitleDiv>
        </UserDiv>
        <FollowersDiv>
          <h4>Followers:</h4>
          {
            userFollowers.map((follower, id) => (
              <a key={id} href={follower.html_url}>{follower.login}</a>
            ))
          }
        </FollowersDiv>
      </TopDiv>
    )
  }
}

const TopDiv = styled.div `
  display: flex;
  justify-content: center;
`

const UserDiv = styled.div `
  display: flex;
  width: 40%;

  text-align: center;

  background-color: #20232A;
  box-shadow: 0 0 3px #20232A, 0 0 10px black inset;
	border-radius: 10px;
	border: 2px solid #20232A;
`

const ImgDiv = styled.div `
  width: 150px;
`

const UserImg = styled.img `
  max-width: 100%;
  border-radius: 10px;
`

const TitleDiv = styled.div `
  display: flex;
  flex-direction: column;

  width: 100%; // match size of UserDiv
`

const LoginDiv = styled.div `
  font-size: 2rem;
`

const NameDiv = styled.div `
font-size: 1rem;
`

const LinkDiv = styled.div `
font-size: 1rem;
`

const FollowersDiv = styled.div `
  display: flex;
  flex-direction: column;
`