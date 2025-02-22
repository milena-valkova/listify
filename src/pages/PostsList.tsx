import { useState } from 'react';
import useFetch from '../hooks/useFetch';
import PostCard from './PostCard';
import { Flex } from 'antd';
import { Collapse, theme } from 'antd';
import { PostWithUser } from '../context/types';
import { useTranslation } from 'react-i18next';
  
export default function PostsLists () {
  const fullPostsList = useFetch();
  const { t } = useTranslation();
  const [activeKey, setActiveKey] = useState<string | string[]>([]);

  const handleChange = (key: string | string[]) => {
    setActiveKey(key);
  };

  const { token } = theme.useToken();

  const panelStyle: React.CSSProperties = {
    marginBottom: 10,
    marginTop: 10,
    borderRadius: token.borderRadiusLG,
    border: 'none',
  };

  return (
    <>
      { Object.entries(fullPostsList).map(([userId, posts]) => {
          const blogPosts = posts as PostWithUser[];
          return <Collapse
            key={userId.toString()}
            collapsible="header"
            defaultActiveKey={['1']}
            activeKey={activeKey}
            accordion
            onChange={handleChange}
            style={{ background: token.colorBgContainer, marginBottom: 12 }}
            items={[{
                key: userId,
                style: panelStyle,
                label: t('postsBy', {username: blogPosts[0].user.username}),
                children: <Flex wrap gap="middle" justify='center' className='flex-container'> 
                  {blogPosts.map((post: any) => <PostCard key={post.id} {...post}/> )}
                </Flex>
              }]}
          />
      })}
    </>
  )
}