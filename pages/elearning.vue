<template>
    <div class="custom-bodypad">
        
        <div class="row mt-3 mb-3">
        <div class="col-lg-12 grid-margin stretch-card ">
            <div class="card">
                <div class="card-body">
                    
                    <div class="d-sm-flex pb-4 mb-4 border-bottom">
                        <div class="d-flex align-items-center">
                        <h4 class="card-title">E-Learning Library</h4>
                        </div>
                        <form class="ml-auto d-flex pt-2 pt-md-0 align-items-stretch w-50 justify-content-end">
                        <input type="text" class="form-control w-50" placeholder="Search">
                        <button type="submit" class="btn btn-primary no-wrap ml-2">Search</button>
                        </form>
                    </div>
                    <div class="flow-x elearn">
                        <table  class="table cst-table table-hover table-bordered">                                    
                                <tr class="mstr-tt-row-first">
                                <th> Title </th>
                                <th>Subject</th>
                                <th> Material Type </th>
                                <th class="row-desc"> Description </th>
                                <th> Created Date </th>
                                <th> Content Type</th>
                                <th> Status </th>
                                <th> Actions </th>
                                </tr>                                  
                                <tr>
                                <td> Chapter 2 - Trignometry</td>
                                <td>Mathematics</td>
                                <td> Home Work </td>
                                <td> The expression \sin^{-1}(x)sin−1(x)sine, start superscript, minus, 1, end superscript, 
                                    sin(x)</td>
                                <td> 02-06-2020 </td>
                                <td> Video </td>
                                <td>Pending/ Downloaded/ Submitted</td>
                                <td>
                                    <a href="#" class="actn-btn" data-toggle="modal" data-target="#view-assg"><i class="mdi mdi-eye"></i></a>
                                    <a href="#" class="actn-btn" data-toggle="modal" data-target="#upload-assg"><i class="mdi mdi-upload"></i></a>
                                    <a href="#" class="actn-btn" ><i class="mdi mdi-download"></i></a>
                                </td>
                                </tr>                                   
                            </table>
                    </div>
                </div>
            </div>
        </div>
        <!--Modal view Starts-->
        <div id="view-assg" class="modal fade" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header modal-bg">
                <h5 class="modal-title"> Assignment</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
                </button>
            </div>
            <form class="forms-sample"> 
                <div class="modal-body modal-bg">
                <div class="row">                          
                    <div class="col-md-12">
                    <div class="form-group">
                        <h5 for="title">Title</h5>
                        <p>Chapter 2 - Trignometry</p>
                    </div>
                    </div>
                    <div class="col-md-12">
                    <div class="form-group">
                        <h5 for="subject">Subject</h5>
                        <p>Mathematics</p>
                    </div>
                    </div>
                    <div class="col-md-12">
                    <div class="form-group">
                        <h5 for="description">Description</h5>
                        <p>The expression \sin^{-1}(x)sin −1 (x)sine, start superscript, minus, 1, end superscript, left parenthesis, x, right parenthesis is not the same as \dfrac{1}{\sin(x)} sin(x) 1​start fraction, 1, divided by, sine, left parenthesis, x, right parenthesis, end fraction. In other words, the -1−1minus, 1 is not an exponent. Instead, it simply means inverse function.</p>
                    </div>
                    </div>
                    <div class="col-md-12">
                    <div class="form-group cstm-conType">
                        <div class="contType">
                        <iframe  src="https://www.youtube.com/embed/-22N-qs5PHE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                    </div>
                </div>                         
                </div>
                                    
                </form>
            </div>
        </div>
        </div>
        <!--Modal view Field  Ends-->
        <!--Modal Upload Starts-->
        <div id="upload-assg" class="modal fade" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header modal-bg">
                <h5 class="modal-title"> Upload </h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
                </button>
            </div>
            <form class="forms-sample"> 
                <div class="modal-body modal-bg">
                <div class="row">                          
                    <div class="col-md-12">
                    <div class="form-group">                          
                        <input type="file" name="img[]" class="file-upload-default" accept="image/png, image/jpeg, .csv, .pdf, .doc, .docx, application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet ">
                        <div class="input-group col-xs-12">
                            <input type="text" class="form-control file-upload-info" disabled="" placeholder="Upload ">
                            <span class="input-group-append">
                            <button class="file-upload-browse btn btn-primary" type="button">Upload</button>
                            </span>
                        </div>
                        <small class="form-text text-muted">Supports .csv, .dat, .doc, .docx, .jpg, .jpeg, .pdf, .png, .ppt, .xls, .xlsx</small>
                        <small class="form-text text-muted">Max Size 2MB</small>
                        </div>
                    </div>
                </div>                         
                </div>
                <div class="modal-footer">                                               
                <button type="submit" class="btn btn-primary mr-2">Save</button>  
                <button class="btn btn-light">Cancel</button>                     
                </div>                        
                </form>
            </div>
        </div>
        </div>
        <!--Modal upload  Ends-->
        </div>                      
    </div>
</template>
<script>
export default {}
</script>

<style></style>
