import { Avatar, Card } from 'antd';
import { PostWithUser } from '../context/types';
import { Modal } from 'antd';
import { useState, use } from 'react';
import { useTranslation } from 'react-i18next';
import { AppContext } from '../context/AppContext';

const { Meta } = Card;

const PostCard = (postWithUser: PostWithUser) => {
  const {user: {username, name}, title, body } = postWithUser;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();
  const context = use(AppContext);
  const { colorDark, colorLight } = context;

  const toggleModal = () => {
    setIsModalOpen((prev: boolean) => !prev);
  };

  return (<>
    <Card
      className='postcard'
      onClick={toggleModal}
      actions={[
        <Avatar size={25} style={{ backgroundColor: colorLight, color: colorDark }}>{username[0]}</Avatar>,
      ]}
      hoverable={true}
    >
        <Meta
          title={<div className="title">{title}</div>}
          description={<div className="description">{body}</div>}
        />
    </Card>
    <Modal 
      title={title} 
      open={isModalOpen} 
      onCancel={toggleModal}
      footer={null}
    >
      <p className="description">{body}</p>
      <p style={{color: colorDark}}>{t("currentPostOf", {name, username})}</p>
    </Modal>
  </>
  )
};

export default PostCard;