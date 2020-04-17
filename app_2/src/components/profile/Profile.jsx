import React from 'react';
import './Profile.sass';
import avatar from './avatar.jpg'
import MyPosts from "./myPosts/MyPosts";

const Profile = ({dataPost, addPost}) => {
	return (
		<div className={'content'}>

			<div className="column_content">
				<div className={'column_profile'}>
					<div className={'avatar'}>
						<img src={avatar} alt="avatar"/>
						<div className={'avatar_buttons'}>
							<button className={'avatar_btn avatar_edit'}>Измѣнить</button>
							<button className={'avatar_btn avatar_settings'}>...</button>
						</div>
					</div>
				</div>

				<div className={'column_info'}>
					<div className={'profile_info'}>name and profile info</div>
					<MyPosts posts={dataPost.posts} addPost={addPost}/>
				</div>
			</div>

		</div>
	)
};


export default Profile;




