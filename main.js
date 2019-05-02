$(function () {
    const MSG_EMPTY = '入力必須の項目です';
    const MSG_TEXT_MAX = '20文字以内で入力してください';
    const MSG_EMAIL_TYPE = 'EMAILの形式で入力してください';
    const MSG_COMMENT_MAX = '100文字以内で入力してください';

    $('.valid-text').keyup(function () {
        var form_g = $(this).closest('.form-group');
        var text_length = $(this).val().length;

        if (text_length > 20) {
            form_g.removeClass('has-success').addClass('has-error');
            form_g.find('.help-block').text(MSG_TEXT_MAX);
        } else {
            form_g.removeClass('has-error').addClass('has-success');
            form_g.find('.help-block').text('');
        }
    });

    $('.valid-email').keyup(function () {
        var form_g = $(this).closest('.form-group');
        var email_length = $(this).val().length;
        var email_pattern = $(this).val().match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/);

        if (email_length === 0) {
            form_g.removeClass('has-success').addClass('has-error');
            form_g.find('.help-block').text(MSG_EMPTY);
        } else if (email_length > 50 || !email_pattern) {
            form_g.removeClass('has-success').addClass('has-error');
            form_g.find('.help-block').text(MSG_EMAIL_TYPE)
        } else {
            form_g.removeClass('has-error').addClass('has-success');
            form_g.find('.help-block').text('');
        }
    });

    $('.valid-textarea').keyup(function () {
        var form_g = $(this).closest('.form-group');
        var comment_length = $(this).val().length;

        form_g.find('.show-count-text').text(comment_length);

        if (comment_length === 0) {
            form_g.removeClass('has-success').addClass('has-error');
            form_g.find('.help-block').text(MSG_EMPTY);
        } else if (comment_length > 100) {
            form_g.removeClass('has-success').addClass('has-error');
            form_g.find('.help-block').text(MSG_COMMENT_MAX);
        } else {
            form_g.removeClass('has-error').addClass('has-success');
            form_g.find('.help-block').text('');
        }
    })
});