import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import InboxPage from './pages/Inbox/Inbox';
import MessageList from './Components/MessageList/MessageList';
import Message from './Components/Message/Message';
import Nav from './Components/Nav/Nav';

export default function App() {
  return (
    <div className="app">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/inbox" element={<InboxPage />}>
          <Route index element={<MessageList />} /> 
            <Route path="messageList" element={<MessageList />}>
              <Route path=":id" element={<Message />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
