$(function () {
    const MSG_EMPTY = '入力必須の項目です';
    const MSG_TEXT_MAX = '20文字以内で入力してください';
    const MSG_EMAIL_TYPE = 'EMAILの形式で入力してください';
    const MSG_COMMENT_MAX = '100文字以内で入力してください';

    $('.valid-text').keyup(function () {
        var form_g = $(this).closest('.form-group');

        if ($(this).val().length > 20) {
            form_g.removeClass('has-success').addClass('has-error');
            form_g.find('.help-block').text(MSG_TEXT_MAX);
        } else {
            form_g.removeClass('has-error').addClass('has-success');
            form_g.find('.help-block').text('');
        }
    });

});