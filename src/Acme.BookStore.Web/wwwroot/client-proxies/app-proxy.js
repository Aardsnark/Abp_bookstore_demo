/* This file is automatically generated by ABP framework to use MVC Controllers from javascript. */


// module app

(function(){

  // controller acme.bookStore.books.book

  (function(){

      abp.utils.createNamespace(window, 'acme.bookStore.books.book');
      abp.appPath = "https://localhost:44381/"
 

    acme.bookStore.books.book.create = function(input, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/app/book',
        type: 'POST',
        data: JSON.stringify(input)
      }, ajaxParams));
    };

    acme.bookStore.books.book.update = function(id, input, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/app/book/' + id + '',
        type: 'PUT',
        data: JSON.stringify(input)
      }, ajaxParams));
    };

    acme.bookStore.books.book['delete'] = function(id, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/app/book/' + id + '',
        type: 'DELETE',
        dataType: null
      }, ajaxParams));
    };

    acme.bookStore.books.book.get = function(id, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/app/book/' + id + '',
        type: 'GET'
      }, ajaxParams));
    };

    acme.bookStore.books.book.getList = function(input, ajaxParams) {
      return abp.ajax($.extend(true, {
        url: abp.appPath + 'api/app/book' + abp.utils.buildQueryString([{ name: 'sorting', value: input.sorting }, { name: 'skipCount', value: input.skipCount }, { name: 'maxResultCount', value: input.maxResultCount }]) + '',
        type: 'GET'
      }, ajaxParams));
    };

  })();

})();


