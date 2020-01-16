import React from 'react';
import ReactDOM from'react-dom';
import ApprovalCard from './ApprovalCard'
import CommentDetails from './CommentDetails';
const App = () => {
	return (
			<div className="ui container comments">

				<ApprovalCard>
					<CommentDetails
						author="Kiran Bal"
						timeAgo="Today At 4:45PM" 
						myText="Nice Blog Post"
					/>
				</ApprovalCard>
				<ApprovalCard>
					<CommentDetails 
						author="Jewel Jo Prince" 
						timeAgo="Today At 3:45AM" 
						myText="Awesome"
					/>
				</ApprovalCard>
				<ApprovalCard>
					<CommentDetails 
						author="David Joy" 
						timeAgo="Yesturday At 8:10PM" 
						myText="Superr Blog Post"
					/>
				</ApprovalCard>
				<ApprovalCard>
					<CommentDetails 
						author="Abraham Mathew" 
						timeAgo="Yesturday At 4:45PM"
						myText="Best Blog Post"
					/>
				</ApprovalCard>
			</div>
		);
};

ReactDOM.render(<App />, document.querySelector('#root'));