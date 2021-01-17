import React, { useState } from 'react';
import { Card, Collapse, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import SimpleButton from '../SimpleButton';
import SimpleInput from '../SimpleInput';

const { Panel } = Collapse;

const Column: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);
  const [columnName, setColumnName] = useState<string>('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const tasks = React.useMemo(() => new Array(counter).fill(
    <Card title={<span className="title" contentEditable="true">Новая задача</span>} onClick={showModal} />,
  ), [counter]);
  return (
    <>
      <Card
        className="board-column"
        title={(
          <Collapse defaultActiveKey={['1']} ghost>
            <Panel header={columnName} key="1">
              <SimpleInput onChange={(value) => setColumnName(value)} placeholder="Добавить название" />
            </Panel>
          </Collapse>
      )}
        bordered={false}
        style={{ background: '#1890ff' }}
      >
        {tasks}
        <SimpleButton action={() => setCounter(counter + 1)} title="Добавить задачу" icon={<PlusOutlined />} />
      </Card>
      <Modal
        title="Задача"
        visible={isModalVisible}
        onOk={handleCancel}
        onCancel={handleCancel}
      >
        Text
      </Modal>
    </>
  );
};

export default Column;
