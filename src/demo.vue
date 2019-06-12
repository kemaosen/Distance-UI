<template>
    <!-- 首页管理 -->
    <div class="form">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="banner配置" name="first">
                <ul class="flex-ul">
                    <li class="fitst" @click="handleIsShowModel(true,'新建banner')">
                        <p>
                            + 添加banner
                        </p>
                    </li>
                    <li v-for="(value,index) in bannerList" :key="'bannerList'+index">
                        <div class="top"><img :src="value.bannerUrl" alt=""></div>
                        <div class="down">
                            <el-button @click="handleIsShowModel(true,'修改banner',value)">编辑</el-button>
                            <span></span>
                            <el-button @click="handleChangeBanner(value,-1)">左移</el-button>
                            <span></span>
                            <el-button @click="handleChangeBanner(value,+1)">右移</el-button>
                            <span></span>
                            <el-button @click="handleDeleteBanner(value)">删除</el-button>
                        </div>
                    </li>
                </ul>
            </el-tab-pane>
            <el-tab-pane label="发现配置" name="second">发现配置</el-tab-pane>
        </el-tabs>
        <!-- 模态框 -->

        <div class="model">
            <el-dialog :title="message.modelTitle" :visible.sync="dialogFormVisible">
                <el-form :model="form">
                    <el-form-item label="banner图片" :label-width="formLabelWidth">
                        <!--multiple 是否开启多文件上传  -->
                        <!--limit 可上传文件数量  超出不上传 -->
                        <!-- :on-exceed 上传文件超出执行函数 -->
                        <!-- accept 限制上传文件的格式   列accept="image/jpeg,image/gif,image/png"  非验证通过的格式 给出提示 <div slot="tip" class="el-upload__tip">请上传图片格式文件</div>-->
                        <!-- 注意这里只是选择文件时限制格式，其实用户还是可以点选“所有文件”选项，上传其他格式。如果需要在在上传时再次校验，择需要在:before-upload这个钩子绑定相应的方法来校验， -->
                        <!-- :http-request="upLoad" -->
                        <el-upload
                                class="avatar-uploader"
                                action=""
                                list-type="picture-card"
                                ref="upload"
                                :auto-upload='false'
                                show-file-list
                                :on-error="handleVideoError"
                                :on-exceed="beyondFile"
                                :on-success="handleVideoSuccess"
                                :http-request="fnUploadRequest"
                                :before-upload="beforeAvatarUpload"
                                :limit='10'
                                multiple>
                            <i class="el-icon-plus"></i>
                        </el-upload>
                    </el-form-item>

                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="handleIsShowModel(false)">取 消</el-button>
                    <el-button type="primary" @click="submitUpload(false,'新建banner')">确 定</el-button>
                </div>
            </el-dialog>
        </div>
    </div>
</template>

<script>
    import {bannerList, bannerSave, albumGetAll,ossURL} from '@/api/url.js'
    import oss from '@/config/oss'
    export default {
        mounted () {
            let a = 3;
            this.changeGetPageData(1,10);
        },
        data() {
            return {
                bannerList:'',              // 获取banner列表
                dialogFormVisible:false,    // 控制是否显示弹框
                albumList:[],               // 所有的专辑
                message:{
                    modelTitle:'新建banner',
                    videosOss:ossURL
                },
                input:'',
                formLabelWidth:'120px',
                form:{
                    albumId:'',
                    bannerNumber: '',
                    bannerFile: "",
                    editTime: "",
                    id: -1,
                    state: '',
                    title: "",
                    addTime:'',
                },
                activeName: 'first',

                // 对象存储
                imageUrl:'',
            }
        },
        methods: {
            // 点击确认提交按钮提交
            submitUpload() {
                this.$refs.upload.submit();
            },
            // 自定义上传覆盖默认上传
            async fnUploadRequest(option) {
                oss.ossUploadFile(option);
            },
            // 文件超出个数限制时的钩子
            beyondFile(files, fileList) {
                this.$message({message: '只能上传limit',type: 'error'});
            },
            // 上传失败
            handleVideoError(){
                this.$message({message: '上传失败',type: 'error'});
            },
            // 上传成功
            handleVideoSuccess(response, file, fileList) {
                if(response){
                    this.imageUrl= ossURL+response.name;
                    this.$message({message: '上传成功',type: 'success'});
                }
            },
            // 文件验证
            beforeAvatarUpload(file) {
                const isJPG = (file.type === 'image/jpeg' || file.type === 'image/png' || file.type ==='image/gif');
                const isLt2M = file.size / 1024 / 1024 < 20;

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG，PNG，GIF 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 20MB!');
                }
                return isJPG && isLt2M;
            },

            changeGetPageData(page,rows){// 获取当前页面数据
                this.$post(bannerList,{page,rows})
                    .then(res => {
                        console.log(res);
                        if(res.status === 200){
                            this.bannerList = res.rows;
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    })
            },
            handleIsShowModel(bool,str){// 打开模态框
                this.dialogFormVisible = bool;
                this.message.modelTitle = str;
                if(!bool){
                    this.param.append('bannerNumber',this.form.bannerNumber);
                    this.param.append('albumId',1);
                    this.param.append('editTime',this.form.editTime);
                    this.param.append('addTime',this.form.addTime);
                    this.param.append('state',this.form.state);
                    this.param.append('id',this.form.id);
                    this.param.append('title',this.form.title);
                    this.$form(bannerSave,this.param)
                        .then(response=>{
                            if(response.status == 200){
                                this.changeGetPageData(this.page,this.rows);
                                this.$message({message: '添加成功',type: 'success'});
                            }
                        })
                        .catch(error => {console.log(error)})
                }
            },
            handleDeleteBanner(value){// 删除一个banner
                this.$post(bannerDelete,{ids:value.id, _method:'delete'})
                    .then(res => {
                        console.log(res);
                        if(res.status === 200){
                            this.$message({message: '删除成功',type: 'success'});
                            this.changeGetPageData(this.page,this.rows);
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    })
            },
            handleChangeBanner(value,num){// 修改一个banner的位置
                this.$post(bannerSave,{ids:value.id,bannerNumber:value.bannerNumber + num})
                    .then(res => {
                        console.log(res);
                        if(res.status === 200){
                            this.$message({message: '修改成功',type: 'success'});
                            this.changeGetPageData(this.page,this.rows);
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    })
            },
            handleClick(tab, event) {
                console.log(tab, event);
            },
            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
            },
        },
        watch: {
        },
        filters: {},
        computed: {},
        components: {

        }
    }
</script>

<style scoped lang="scss">
    .form{
        $a:1;
        padding: 40px;
        .flex-ul{
            display: flex;
            justify-content: flex-start;
            padding: 0;
            flex-wrap: wrap;
            li{width: 300px;height: 200px; display: flex;flex-direction: column;   background-color: rgba(246, 246, 246, 1);margin-right:90px;margin-bottom:10px;
                .top{height: 170px;margin: 3px;background-color:#fff;
                    img{width: 100%;height: 100%}
                }
                .down{height: 30px;display: flex;justify-content: space-between;
                    button{margin: 0;border: none;width: 25%;border-radius: 0;height: 30px;padding: 0;     background-color: rgba(246, 246, 246, 1);}
                    span{width: 1px;background-color: #ddd;height: 15px;align-self: center; }
                }
            }
            .fitst{
                background-color: #fff;
                border: 1px dashed transparent;
                background: linear-gradient(white,white) padding-box,
                repeating-linear-gradient(-45deg,#ccc 0, #ccc 0.25em,white 0,white 0.75em);
                position: relative;
                p{position: absolute;top: 0;left: 0;right: 0;bottom:0;width: 85px;height: 30px;margin: auto;line-height: 30px;color: #ddd;}

            }
            // li:nth-child(3){margin: 0};
            // li:nth-child(6){margin: 0};
        }
    }
</style>
<style lang="scss">
    .form{
        .el-upload--text{
            position: relative;
            vertical-align:bottom;
            overflow: hidden;
        }
        .avatar-uploader .el-upload {
            border: 1px dashed #d9d9d9;
            border-radius: 6px;
            cursor: pointer;
            position: relative;
            overflow: hidden;
        }
        .avatar-uploader .el-upload:hover {
            border-color: #409EFF;
        }
        .avatar-uploader-icon {
            font-size: 28px;
            color: #8c939d;
            width: 178px;
            height: 178px;
            line-height: 178px;
            text-align: center;
        }
        .avatar {
            width: 178px;
            height: 178px;
            display: block;
        }
        .el-upload__input{position: absolute}
    }
    .el-loading-mask{
        background-color: rgba(255,255,255,0.2)!important;
    }
</style>
