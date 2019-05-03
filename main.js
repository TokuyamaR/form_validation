$(function () {
    const MSG_EMPTY = '入力必須の項目です';
    const MSG_TEXT_MAX = '20文字以内で入力してください';
    const MSG_EMAIL_TYPE = 'EMAILの形式で入力してください';
    const MSG_COMMENT_MAX = '100文字以内で入力してください';
    const MSG_PHONE_NUMBER_LENGTH = '電話番号は11桁の携帯番号で入力してください';
    const MSG_PHONE_NUMBER_PATTERN_ERR = '電話番号の入力形式が間違っています';

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

    $('.format-number').change(function () {
        var form_g = $(this).closest('.form-group');

        // 入力値からハイフンを取り除く
        var format_before = $(this).val();
        format_before = format_before.replace(/-/g, '');

        // 入力値をすべて半角に直す
        var format_after = format_before.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function (s) {
            return String.fromCharCode(s.charCodeAt(0) - 0xFEE0)
        });

        // 入力された文字数判定
        if (format_after.length === 11) {
            $(this).val(format_after.substr(0, 3) + '-' + format_after.substr(3, 4) + '-' + format_after.substr(7, 4));
            console.log($(this).val());
            var format_phone_number_pattern = $(this).val().match(/^(070|080|090)-\d{4}-\d{4}$/);

            if (format_phone_number_pattern) {
                form_g.removeClass('has-error').addClass('has-success');
                form_g.find('.help-block').text('');
            } else {
                form_g.removeClass('has-success').addClass('has-error');
                form_g.find('.help-block').text(MSG_PHONE_NUMBER_PATTERN_ERR);
            }
        } else {
            $(this).val(format_after);
            form_g.removeClass('has-success').addClass('has-error');
            form_g.find('.help-block').text(MSG_PHONE_NUMBER_LENGTH);
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