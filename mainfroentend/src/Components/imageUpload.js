import React, { Component } from 'react';
import { Button , Upload, Icon, Modal } from 'antd';

import { connect } from 'react-redux';

import { uploadImage } from './employee/actions';


function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

class ImageUpload extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: [
    ],
  };

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
    });
  };

  handleChange = ({ fileList }) => this.setState({ fileList });

  uploadPic = () => {
    var formData = new FormData();
    const {fileList} = this.state
    formData.append('image', fileList);
    this.props.uploaddata(formData)
  }

  render() {
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div className="clearfix">
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture-card"
          fileList={fileList}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
        >
          {fileList.length >= 8 ? null : uploadButton}
        </Upload>
        <Button onClick ={this.uploadPic}>upload</Button>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
    return {
        uploaddata: (data) => {
          dispatch(uploadImage(data));

      },
    };
};
export default connect(null, mapDispatchToProps)(ImageUpload);




